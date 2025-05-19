import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Optionally show an error message to the user
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
    // Fetch products when the component mounts
    fetchProducts();
  }, [navigate]); // Added fetchProducts to the dependency array if you want it to refetch on navigate changes

  // Yeni ürün ekleme
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      // After successfully adding, refetch the products to update the list
      fetchProducts();
      setNewProduct({
        name: '',
        price: '',
    description: '',
    category: '',
    image: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      // Optionally show an error message to the user
    }
  };

  // Ürün güncelleme
  const handleUpdateProduct = async (id) => {
    try {
      const response = await fetch(`/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      // After successfully updating, refetch the products
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
      // Optionally show an error message to the user
    }
  };

  // Ürün silme
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      // After successfully deleting, refetch the products
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="admin-panel">
      <h1>Menü Yönetim Paneli</h1>
      
      {/* Yeni Ürün Ekleme Formu */}
      <div className="add-product-form">
        <h2>Yeni Ürün Ekle</h2>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Ürün Adı"
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Fiyat"
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            required
          />
          <textarea
            placeholder="Açıklama"
            value={newProduct.description}
            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Kategori"
            value={newProduct.category}
            onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Resim URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            required
          />
          <button type="submit">Ürün Ekle</button>
        </form>
      </div>

      {/* Ürün Listesi */}
      <div className="product-list">
        <h2>Mevcut Ürünler</h2>
        <table>
          <thead>
            <tr>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  {editingProduct?.id === product.id ? (
                    <input
                      type="text"
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})}
                    />
                  ) : (
                    product.price
                  )}
                </td>
                <td>{product.category}</td>
                <td>
                  {editingProduct?.id === product.id ? (
                    <>
                      <button onClick={() => handleUpdateProduct(product.id)}>Kaydet</button>
                      <button onClick={() => setEditingProduct(null)}>İptal</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => setEditingProduct(product)}>Düzenle</button>
                      <button onClick={() => handleDeleteProduct(product.id)}>Sil</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel; 