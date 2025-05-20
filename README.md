# Kafe Web Sitesi Dökümantasyonu

## Proje Genel Bakış
Bu proje Web Projesi(BPP248) dersi içindir, React.js frontend ve Node.js/Express backend kullanılarak geliştirilmiş bir kafe web sitesi uygulamasıdır. Uygulama, stil ve bileşenler için Material-UI (MUI) kullanmatayız.

## Teknoloji Altyapısı
- Frontend:
  - React.js (v19.1.0)
  - Material-UI (v7.1.0)
  - React Router DOM (v7.5.3)
  - Emotion (stil bileşenleri için)
- Backend:
  - Node.js
  - Express.js
  - CORS middleware
- Geliştirme Araçları:
  - Concurrently (frontend ve backend'i aynı anda çalıştırmak için)

## Proje Yapısı

### Ana Dizin
```
cafe-website/
├── src/                    # Frontend kaynak kodu
├── public/                 # Statik dosyalar
├── build/                  # Üretim derleme dosyaları
├── scripts/               # Derleme ve yardımcı scriptler
├── server.js              # Backend sunucusu
├── products.json          # Ürün veri depolama
└── package.json           # Proje bağımlılıkları ve scriptler
```

### Frontend Yapısı (src/)
```
src/
├── components/            # Yeniden kullanılabilir React bileşenleri
├── pages/                # Sayfa bileşenleri
├── styles/               # CSS ve stil dosyaları
├── data/                 # Statik veri dosyaları
├── photos/               # Görsel varlıklar
├── App.js                # Ana uygulama bileşeni
└── index.js              # Uygulama giriş noktası
```

## Backend API Uç Noktaları

### Ürünler API
- `GET /products` - Tüm ürünleri getir
- `POST /products` - Yeni ürün ekle
- `PUT /products/:id` - ID'ye göre ürün güncelle
- `DELETE /products/:id` - ID'ye göre ürün sil


### Ürün Nesnesi
```json
{
  "id": "string",
  "name": "string",
  "price": "number",
  "description": "string",
  "image": "string"
}
```

## Geliştirme Kurulumu

Geliştirme sunucusunu başlat:
```bash
npm start
```
aşağıdakileri eşzamanlı olarak çalıştıracak:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001


## Tarayıcı Desteği
 Chrome, Firefox ve Safari(Mobil uyumlu)


