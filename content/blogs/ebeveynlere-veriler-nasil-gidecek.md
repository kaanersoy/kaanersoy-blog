---
title: ebeveynlere veriler nasıl gidecek?
description: Vue.js child-to-parent veri akışı ve $emit kullanımı
---
# ebeveynlere veriler nasıl gidecek?

Vue.js child-to-parent veri akışı ve $emit kullanımı

Merhaba herkese 👋,

Bugün çoğu zaman küçük, bazen de büyük bir dert olan Vue.js component’lerinde child-to-parent ilişkisi hakkında bildiklerimden bahsetmek istiyorum.

Vue.js bize ne kadar güzel data-management toolları sunsa da bazı use-case’lerde böyle kullanımlara gerek kalmayabiliyor.

Bir olayı veya veri öbeğini child’dan parent’a aktarmak istediğiniz durumlar elbet ki karşınıza çıkmıştır.

Havada kalmasını istemediğim için biraz örneklerle ilerlemek istiyorum.

Bu örneğimizde içinde bir text ve button bulunan card component’imiz olsun. Card component’imize text prop’lardan geliyor ve bu durumda biz içerideki text’i button’a basılınca değiştirmek istiyoruz.

<iframe src="https://gist.github.com/kaanersoy/837af707809fb2bfcb733f9d96f06c74.js" frameborder=0></iframe>

Fakat burada bir sıkıntımız var ki: Prop olarak gelen bir değeri component içinde mutate etmek güzel bir pratik değil.
> İnsanın kendini dürtüp efendim demesi gibi bir şey😅

Bunun için Vue bize $emit adında bir fonksiyon sağlıyor. Bunun ile custom bir event yaratıp içeriden bu event’i tetikliyebiliyoruz.

Dışarıdan ise bu event’i dinleyebiliyoruz.

<iframe src="https://medium.com/media/ac7fe822a857415b313a03466beda312" frameborder=0></iframe>

Yukarıda kullanıldığı şekilde gördüğümüz gibi $emit iki tane parametre alıyor.

* 1. Parametre: **oluşturduğumuz custom event**

* 2. Parametre: **dışarıya taşıyacağımız herhangi bir data**

Şimdi ebeveynimize gidip oluşturduğumuz custom-event’i dinleme vakti💃

<iframe src="https://medium.com/media/9a457c1071bc542d290c3e9a5795b99e" frameborder=0></iframe>

Yorum satırlarında da anlattığım gibi, component’in içinden gelenchangeText eventini yakaladık ve bunu yakalamamızla catchValue fonksiyonu çalışsın dedik.

Bu catchValue fonksiyonumuzun içine bir parametre girdik ki içerden gönderdiğimiz data’yı yakalayalım.

Bu datayı yakaladıktan sonra ise state’imize data’yı eşitledik.

Bu sayede component’in kendi içinde prop’unu değiştirmesine engel olduk.

Başlarken dediğim gibi, çok karşımıza çıkmasa da bazen çok kullanışlı olabiliyor.

**$emit** hakkında anlatmak istediklerim bu kadar, okuduğunuz için çok teşekkür ederim.

Geri dönüşlerinizi bekliyorum😊
