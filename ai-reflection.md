# AI ile Geliştirme Deneyimi - Kısa Refleksiyon

## Hız ve Verimlilik

AI, bu projede geliştirme sürecimi önemli ölçüde hızlandırdı. Özellikle tekrarlayan görevlerde (projeye ilk geliştirmeye başarken tüm componentler için core logiclerin yazılması, import'larını güncelleme, benzer yapıların oluşturulması) manuel işlemleri otomatikleştirerek çok fazla zaman kazandırdı. Detaylı tarif ettiğim refactorleri çok başarılı bir şekilde yaptı. Örneğin projeyi feature based structure' a geçirmesini istemem gibi.

## Yanıltıcı Anlar ve Guardrails

AI'ın beni yanılttığı en büyük nokta, pixel perfect tasarım konusuydu. Ekran görüntülerine göre bir çıktı üretmesini istediğimde renkleri bile doğru düzgün kullanamadı, oluşturduğu stillerde gereksiz box-shadowlar ve filtreler mevcuttu. Bu yüzden AI çıktısı olan stilleri değiştirmem neredeyse baştan yazmamı gerektirecek kadar eforumu aldı.

**Uyguladığım guardrail'ler:**

1. **TypeScript Type Safety:** Her değişiklikte type safety korundu

2. **Linter Kontrolleri:** AI, her değişiklikten sonra `read_lints` çağrısı yaparak code quality'yi kontrol etti ve hataları düzeltti.

3. **Incremental Changes:** Büyük refactoring'leri küçük adımlara böldüm. Her adımda AI'dan o anki durumu doğrulamasını istedim.

4. **Code Review Mindset:** AI'ın önerilerini körü körüne kabul etmedim. Özellikle category-store ve search-store' un aynı store altında olmasının mantıklı olup olmadığını sorduğumda "Do you think it is logical to put both category and searchTerm store to same store file" AI detaylı analiz yaptı ve benim düşündüğüm gibi ayrılması gerektiğini onayladı.

## AI'ın Güçlü Yönleri

- **Pattern Recognition:** AI, projedeki pattern'leri hızlıca kavradı (feature-based architecture, self-contained components).
- **Consistency:** 10+ dosyayı güncellerken hiç tutarsızlık yaratmadı.
- **Best Practices:** Single Responsibility, Separation of Concerns gibi prensipleri doğal olarak uyguladı.
- **Self-Correction:** Kendi önerdiği yaklaşımı analiz edip eleştirebildi.

## AI'ın Zayıf Yönleri

- **İlk Anlayış:** Bazen istediğim şeyi ilk seferde tam anlamadı (store konusu).
- **Context Switching:** Çok fazla dosya arasında geçiş yapıldığında bazen eski context'i unutabiliyor.
- **CSS:** İstediğim responsive tasarımı uygulamada başarısız. Sadece güzel gözüken bir tasarım çıkarmada iyi fakat bir tasarım dosyasını pixel perfect hale getirmede başarısız.

## Sonuç

AI, bu projede bir **pair programming partner** gibi çalıştı. Junior bir geliştirici gibi hızlı kod yazdı, ama senior bir geliştirici gibi mimari kararları tartışabildi. En önemli bulgu: AI'ı **sorgulayıcı bir şekilde kullanmak** optimal sonuçlar veriyor. Körü körüne kabul etmek yerine, AI'ın önerilerini değerlendirmek ve alternatif çözümler sorgulatmak, kod kalitesini önemli ölçüde artırdı.

---
