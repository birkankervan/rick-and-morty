### Rick And Morty App

https://rick-and-morty-five-dusky.vercel.app/

Bu uygulama React js kullanılarak oluşturulmuştur.

Bu web uygulaması ile rick and morty bölümlerini inceleyebilirsiniz. Her bölüm içerisndeki karakterleri filtreleyebilir veya search box ı kullanarak arama yapabilirsiniz.

Karakterler arasında gezebilir, hangi karakterlerin hangi bölümlerde bulunduğunu inceleyebilirsinz.

## **Kullanılan Kütüphaneler:**
- React JS
- swr
- tailwind
- classnames
- axios
- react-router-dom

## **Kullanılan Kütüphanelerin Amaçları**

### SWR
Bir fetch hookudur. Fetch edilen datayı cahcler böylelikle tekrar render ın çnüne geçer. Aynı zamanda kendi içersine ek hooklar yazarak yeni özellikler getirebilirsiniz. Ben bunu `/episodes` sekmesindeki karakterleri bir fetch işlemi yapmadan filtrelemek için kullandım. `hooks/useCharacter.js` dosyasını inceleyebilirsiniz.

### axios
Fetch işlemlerinde `swr` ile beraber fetch yapmak için kullanıldı.

### Tailwind
Çok fonksiyonel bir css aracı. Sade ve kullanışlı arayüzler oluşturmanıza imkan tanımakta.

### classnames
Class isimlerini bir koşula bağlayarak düzenlememize olanak tanır. Üst kısımdaki `Navbar`'ın responsive olması ve Navbarda bulunan sekmelerden aktif olananın gösterilmesi için kullanıldı.

### react-router-dom
Tüm routing işlemleri bu kütüphane ile  yapıldı.
