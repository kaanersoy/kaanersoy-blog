---
title: Netlify nedir? Nasıl kullanılır?
description: Size yakın süre önce karşılaştığım ve mükemmel ayrıcalıklar kazandıracak bir servisi tanıtmak istiyorum.
---
# Netlify nedir? Nasıl kullanılır?

Öncelikle merhaba, size yakın süre önce karşılaştığım ve mükemmel ayrıcalıklar kazandıracak bir servisi tanıtmak istiyorum.

![Netlify Nedir?](https://cdn-images-1.medium.com/max/2400/1*4mPY0U4uKKuCZefAn8MN2A.png)*Netlify Nedir?*

## Netlify nedir?

Öncelikle kullanacağımız bu servisin ne olduğunu ve ne işe yaradığına değinelim. Netlify web projelerinizi ücretsiz bir paketle hayata geçirebileceğiniz bir servis. Web projelerinizi size ait bir alanda tutuyor ve üstelik ücretsiz bir domain name server da sağlıyor.

## Peki ya Netlify’ın bize sağladığı ayrıcalıklar?

Tam da oraya geldik 😄.

**1- Git Bağlantısı ve Otomatik Deploy Algılama**

Biliyoruz ki Git-based sistemler günümüzde çok yaygın ve kullanışlı platformlar haline geldi. Bu yüzden çoğumuz bu sistemleri kullanarak hem yaptıklarımızı insanlarla paylaşıyor hem de Git ayrıcalıklarından yararlanabiliyoruz. Eğer ki herhangi bir Git tabanlı sistemde bir WEB projesi tutuyorsanız bunu hayata geçirip sergilemek Netlify ile çok basit.

Github, Gitbucket, Gitlab gibi Git tabanlı sistemlerde bulunan WEB projelerinizi birkaç tık ile anında ayağa kaldırabiliyorsunuz.

Bunu kullanabilmek için Git hesabınızı Netlify’a bağlayıp aşağıda görebileceğiniz “***New site from Git***” butonuna tıklayıp projenizi seçmeniz yeterli.

![Git-Tabanlı proje bağlantısı](https://cdn-images-1.medium.com/max/2000/1*8IwdFIe8LjFNSDvBHKri8g.jpeg)*Git-Tabanlı proje bağlantısı*

Buraya tıkladıktan ve bir takım upload işlemlerinden sonra projeniz ayağa kalkacak ve bunu sadece Git üzerinde yaptığınız değişikliklerle güncellemeniz çok kolaylaşacak.

Git üzerinde yaptığınız her değişim Netlify tarafından algılanıp site güncellendikten sonra tekrar yayına alınacak. Tekrar dokunmanıza gerek bile olmadan Netlify her şeyi sizin yerinize yapıyor.

**2- Otomatik Deploy Programlayıcısı / Pipeline Design**

Eğer ki bir proje yönetimi görevi yaptıysanız illaki ***pipeline ***terimi ile karşılaşmışsınızdır. Proje yönetiminin en önemli yapıtaşı olan programlı paylaşımı Netlify ile programlamak yapmak mümkün.

Eğer projenizde bir güncelleme yaptıysanız ve bunun belli bir tarih aralığında yayınlanmasını istiyorsanız Netlify’ın deploy programlayıcısını kullanmak isteyebilirsiniz.

Sitenizde yapılan değişiklik için belli bir deploy tarihi ve saati seçip bu saat bu tarihte yayına alınsın komutu verebiliyorsunuz ki bu da hatırı sayılır bir ayrıcalık.

## Netlify Nasıl Kullanılır?

Gelelim bir hürmet olan bu platform’un kullanılışına…

Halihazırda bir projeniz var ise ve bunda bir değişiklik yapmak istemiyorsanız saniyesinde sürükle bırak yaparak dakikalar içinde projenizi internette canlı görebilirsiniz.

![Sürükle bırak ekranı](https://cdn-images-1.medium.com/max/2494/1*36a65NduX2A6TUTab6LXlg.jpeg)*Sürükle bırak ekranı*

Yukarıda gördüğünüz gibi aşağıdaki “Want to deploy a new site without connecting to Git?” bölümüne dosyanızı sürükleyip bıraktığınızda upload işlemi sonrasında size özel bir domain name server üzerinde ayağa kalkıyor ve bir daha dokunmanıza gerek bile kalmıyor.

**Git Projesi Ayağa Kaldırmak**

Eğer ki halihazırda bir projeniz varsa ve bu projeye güncellemeler getirip anında sitede de bu güncellemeleri görmek istiyorsanız şu adımları takip edip bu isteklerinizi karşılayabilirsiniz.

![Git Bağlantılı Proje](https://cdn-images-1.medium.com/max/2494/1*36a65NduX2A6TUTab6LXlg.jpeg)*Git Bağlantılı Proje*

Anasayfaya gelip ***Sites ***sekmesindeki New site from Git butonuna tıklayın. Sizi karşılayan sayfada bir Git hesabı bağlayın ve hayata geçmesini istediğiniz projeyi seçin.

![](https://cdn-images-1.medium.com/max/2000/1*ZGFtatTNKOq8wQjxatM_3Q.jpeg)

Aşağıdaki projelerden hayata geçmesi gerekeni seçin ve diğer sayfada ***Deploy Site*** butonuna tıklayın.

![](https://cdn-images-1.medium.com/max/2000/1*mbxTEZxeWLhYjZJLhFW48w.jpeg)

*S*iteniz ayakta ve kullanıma hazır. Eğer ki sitede güncelleme yapmak isterseniz de Düzenlemeler gerçekleştikten sonra push yaptığınızda Netlify bu güncellemeyi otomatik algılayıp hayata geçiricek. Bunu deploy loglarından okumanız ve ne kadar kısa bir gecikme olduğunu görmeniz mümkün.

Anlatmak istediklerimin hepsi bu kadardı umarım yardımcı olmuşumdur.

Okuduğunuz için teşekkür ederim :)

Sağlıcakla kalın.
