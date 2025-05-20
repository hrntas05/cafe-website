import React from 'react';
import '../App.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Mükemmel Espresso Nasıl Yapılır?</h1>
      <div className="blog-content">
        <img 
          src="https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Espresso yapımı" 
          className="blog-image"
        />
        <article>
          <h2>Espresso Yapmanın Püf Noktaları</h2>
          <p>
            Mükemmel bir espresso yapmak hem bir sanat hem de bir bilimdir. İşte size adım adım mükemmel espresso yapmanın yolları:
          </p>
          
          <h3>1. Kaliteli Kahve Çekirdekleri</h3>
          <p>
            İyi bir espresso için taze ve kaliteli kahve çekirdekleri kullanın. Arabica çekirdekleri genellikle daha yumuşak ve aromalı bir tat sunar.
          </p>

          <h3>2. Doğru Öğütme</h3>
          <p>
            Kahve çekirdeklerini espresso için özel olarak ince öğütün. Öğütme boyutu, suyun kahve ile temas süresini etkiler ve bu da lezzeti doğrudan etkiler.
          </p>

          <h3>3. Doğru Miktar</h3>
          <p>
            Standart bir espresso için 18-21 gram kahve kullanın. Bu miktar, zengin ve dengeli bir tat için idealdir.
          </p>

          <h3>4. Tamp Etme</h3>
          <p>
            Kahveyi portafiltre içinde düzgün bir şekilde tamp edin. Bu, suyun kahve ile eşit temas etmesini sağlar.
          </p>

          <h3>5. Su Sıcaklığı</h3>
          <p>
            İdeal su sıcaklığı 90-96°C arasındadır. Bu sıcaklık, kahvenin aromasının en iyi şekilde ortaya çıkarılmasını sağlar.
          </p>

          <h3>6. Çekim Süresi</h3>
          <p>
            Mükemmel bir espresso çekimi 25-30 saniye sürmelidir. Bu süre, kahvenin tüm aromasının suya geçmesi için idealdir.
          </p>

          <h3>7. Krema</h3>
          <p>
            İyi bir espresso, üzerinde altın-kahverengi bir krema tabakasına sahip olmalıdır. Bu, kahvenin tazeliğini ve kalitesini gösterir.
          </p>

          <div className="tips">
            <h3>Önemli İpuçları:</h3>
            <ul>
              <li>Kahve çekirdeklerini kullanmadan hemen öğütün</li>
              <li>Makinenizi düzenli olarak temizleyin</li>
              <li>Su kalitesine dikkat edin</li>
              <li>Portafiltreyi ısıtın</li>
              <li>Kahve miktarını ve öğütme boyutunu deneyerek en iyi sonucu bulun</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog; 