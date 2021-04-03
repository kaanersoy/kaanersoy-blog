---
title: bir kutunun ortalanma hikayesi
description: Bugün size CSS’e ilk başladığım zamanlarda karşıma çıkan ve bana Google’da **“CSS’de div nasıl ortalanır?”** diye aramalar yaptıran bir problemi anlatmak ve farklı senaryolarda nasıl çözümler getirdiğimden bahsetmek istiyorum.
thumbnail: https://cdn-images-1.medium.com/max/2000/1*TyhgSUIA2j1g9stsObsjMQ.png
---
# bir kutunun ortalanma hikayesi

Merhaba,

Bugün size CSS’e ilk başladığım zamanlarda karşıma çıkan ve bana Google’da **“CSS’de div nasıl ortalanır?”** diye aramalar yaptıran bir problemi anlatmak ve farklı senaryolarda nasıl çözümler getirdiğimden bahsetmek istiyorum.

Hakkında onlarca makale yazılan bu sorunun çözümü çoğu zaman çok basit fakat çok fazla seçenek olduğu için bir o kadar da kafa karıştırıcı olabiliyor.

![](https://cdn-images-1.medium.com/max/2000/1*TyhgSUIA2j1g9stsObsjMQ.png)

Bu soruna çözüme giderken nasıl bir nesneyi hangi eksende ortalayacağımıza karar vermemiz gerekiyor.

Ben yatay(horizontal) eksen ile başlamak istiyorum.

Bir senaryo oluşturalım ve bunun üstünden devam edelim:

Diyelim ki bir **block** elementimizin içinde belli bir genişliği olan başka bir **block** elementimiz var. Bunu yatay eksende ortalamak istiyoruz.

Yani senaryomuz şöyle:

![Block elementi nasıl ortalarsın?](https://cdn-images-1.medium.com/max/2000/1*8FQPJpw-k6K34KisM2EHhw.png)*Block elementi nasıl ortalarsın?*

Burada farazi olarak 60px ,60px ebatlarında aldığım ortalanacak elementimiz mavi oluyor.

block elementler bulundukları kapsayıcının yatay olarak hepsini kapladıkları için belirli bir width değeri verildiğinde `margin-right: auto` değeri alırlar.

İsterseniz inspect element yaparak inceleyelim.

![](https://cdn-images-1.medium.com/max/2000/1*w-7aubbCGn8JDQh3d2pe1A.png)

Gördüğünüz gibi örnek görselde turuncu gözüken yer bizim margin değerimiz.

Bu soruna çözümü biz de `margin: 0 auto` ile getireceğiz.

![*İşte tam olarak böyle ortalanıyorr*](https://cdn-images-1.medium.com/max/2000/1*cIWZCjmRKj4Tap_Z3lhesA.png)*İşte tam olarak böyle ortalanıyorr*

Gördüğümüz gibi sağ ve sol değerleri margin: 0 auto ile verdiğimiz taktirde elementimiz kusursuz bir şekilde ekranımızın ortasında beliriverdi.

Aslında bu senaryo günümüzde çoğu kişinin kullandığı Bootstrap CSS kütüphanesinin .container elementinde de çoğu zaman gözümüzün önünde 😊.

Peki ya burada bir değil de birden fazla mavi kutumuz yan yana olsaydı? O zaman ne yapacaktık? Hemen bu sorunumuzu da çözelim:

![](https://cdn-images-1.medium.com/max/2000/1*aUpDYZa0Zu-Xd0bUcNwVNA.png)*'Peki flexleri ne yapıcaz?' dediğinizi duyar gibiyim*

Şekilde gördüğümüz gibi display: flex; bir adet kapsayıcımız ve yan yana birden fazla elementimiz var. Bunları ortalamak için ne yapacaktık?

Burada ise CSS’in flexbox özellikleri bizi kucaklıyor ve işin içinden kolayca sıyrılmamızı sağlıyor.

![](https://cdn-images-1.medium.com/max/2000/1*AZJJwYnm2-9N3UJYer9_pw.png)*Çok zor olmadı değil mi :)*

Burada kullandığımız justify-content: center; özelliği kapsayıcımızın genişliğinin tam ortasında bizim kutularımızı tutuyor ve bizi büyük bir dertten daha kurtarıyor.

Farklı bir senaryo olan bu elementin dikeyde nasıl ortalanabileceği hakkında gelin beraber bir göz atalım.

Diyelim ki 2 tane farklı boylarda elementimiz var. Yan yana gelmeleri gerek ve küçük olan elementin dikey olarak diğer elementin tam ortasında kalması gerek.

Yani:

![](https://cdn-images-1.medium.com/max/2000/1*LP16cRiqazYVSqOosVZ3og.png)

Bu tarz bir senaryoda CSS’in flexbox özellikleri ve konumlandırma için sağladığı ayrıcalıklar bizim hayatımızı fazlasıyla kurtarıyor.

Tek satır ile burayı çok rahat bir şekilde çözebiliyoruz.

![align-items: center ‘ın gücü adına!](https://cdn-images-1.medium.com/max/2000/1*6HJSHjg-XdjLPwLWMkgFLA.png)*align-items: center ‘ın gücü adına!*

Flex-box ile dikey ortalama yapmaya çalışırken unutmamamız gereken tek şey kapsayıcımızın(yani bu senaryodaki wrapper) yüksekliği. Çünkü align-items: center; ile ortalayacağımız her element kapsayıcının yüksekliği (dikey olarak uzunluğu) ile doğru orantılı ortalanacaktır.

Bu senaryoyu biraz daha abartıp tam olarak ne anlatmaya çalıştığımı size aktarmaya çalışayım.

![şuraya birkaç tane daha mavi kutu ekleyelim🎨](https://cdn-images-1.medium.com/max/2000/1*s3CSAl2neRf5O3QwuolEWw.png)*şuraya birkaç tane daha mavi kutu ekleyelim🎨*

Gördüğünüz gibi kırmızı renkte olan kapsayıcımız ne kadar büyükse mavi kutularımız da ona göre kapsayıcının tam ortasında konumlandı.

Benim bir şeyleri dikey eksende ortalarken takıldığım en büyük hata yüksekliği hesaba katmamak oluyordu. Eğer kapsayıcınızın yüksekliğinin içerdeki child’lar kadar olduğunun farkında değilseniz dikeyde ortalamak istediğiniz objenin hareket etmemesini izlemek insanı çıldırtıyor. Ta ki sorunu bulana kadar.
> Ee ben tam ortada istiyorum!?

Merak etme tam da o kısma geldik!

Şöyle bir senaryo düşünün ki bir nesneniz var ve açılan sayfanın tam ortasında bulunmasını istiyorsunuz.

Örneğin:

![](https://cdn-images-1.medium.com/max/2000/1*RbCTMc6YzgqPC3YJlLIUDQ.gif)

Bu tür senaryolarda genelde responsive tasarımlara geçerken sorunlar yaşadığımı farkettim. Bildiğim kadarıyla geliştiricilerin 2 tane çok kullandığı çözüm yolu var.

1- Kapsayıcıyı yüksekliğini ekran yüksekliği kadar ayarlamak ve display: flex; kullandıktan sonrajustify-content: center; align-items: center; yaparak nesnemizi ekranın tam ortasına almak.

2- Kapsayıcıyı ekran yüksekliği kadar ayarlamak ve position: relative; kullanarak objemizi position: absolute; ile kapsayıcısına bağladıktan sonra top ve left değerleri ile ortalamak.

Hadi bu örnekleri canlandıralım.

### CSS Flexbox kullanmak:

![](https://cdn-images-1.medium.com/max/2000/1*4u06j5RgCde6x9s3GkjzSA.png)
> Voila🎉!!

CSS flexbox ile bunu yaptığımızda nesnemiz hiçbir ekranda değişmeyecek şekilde tam ortada kalacaktır. Sebebi ise height: 100vh; verdiğimiz değer bize daima yüksekliği ekran görüntüsü kadar verecektir.

Geri kalan kuralları daha önceki örneklerde dikey ve yatayda nasıl çalıştıklarını görmüştük.

### Position absolute kullanmak:

![](https://cdn-images-1.medium.com/max/2000/1*VyG9ciDS6ghxS4JOLl5U_Q.png)

Burası biraz karmaşık gelebilir fakat biraz açıklamaya başlayınca kafa açıcı bir yöntem olduğunu beraber göreceğiz.

CSS Flexbox yok iken(daha doğrusu major tarayıcılar tarafından desteklenmiyor iken) web geliştirici abilerimizin kaçtığı bu tür **hacky** yöntemler çoğu yerde karşımıza çıkıyor. Bunlar çoğu zaman zihin açıcı yöntemler oluyor🤯.

Burada yaptığımız işlem öncelikle kapsayıcımıza position: relative; özelliği ekleyerek mavi kutumuzu kapsayıcımıza bağıl hale getirmek.
Sonrasında ise yine height: 100vh; kullanarak kapsayıcımıza ekran yüksekliği kadar yükseklik kazandırdık.

Mavi kutumuz top: 50%; left: 50%; değerlerini aldığında kapsayıcısının %50'si kadar soldan sağa ve yukarıdan aşağıya öteleniyor. Fakat bu bizim için bir sıkıntı doğuruyor bizim kutumuz kendi yüksekliği ve genişliği kadar sağa ve aşağıya taşıyor.

Bunu da transform: translate(-50%, -50%); kullanarak nesnemizi kendisinin %50'si kadar yukarı ve sola ötelenmesini sağlıyoruz.

>  Bir daha 'voila🎉'!

Biraz karmaşık fakat tam teşekkürlü her ekranda çalışmak için hizmetinizde bir mavi kutunuz olmuş oluyor.
Biraz uzun bir yazı olduğunu fark etmem ile beraber aklımdaki tüm senaryoları sizinle paylaştığımı düşünüyorum. Umarım eğlenceli zaman geçirdiğiniz ve bir o kadar da bildiklerimi paylaşabildiğim bir yazı olmuştur.

Okuduğunuz için teşekkür ediyorum. Geri bildirimlerinizi heyecanla bekliyorum.

Görüşmek üzere👋👋.
