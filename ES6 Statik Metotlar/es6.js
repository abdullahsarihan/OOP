// Statik Metotlar

class Matematik {
    sqrt(x){
        console.log(x*x);
    }
   static cube(x) { // Statik anahtar kelimesi ile obje oluşturmadan metodu kullanabiliriz.
        console.log(x*x*x);
    }
}

// Matematik.cube(3);

// Statik metotlar class ın prototype ine yazılmıyor
// Obje üzerinden erişemiyoruz. Sınıf üzerinden erişilir.

// const math = new Matematik();
// console.log(math);

// math.cube(4);

// Matematik.sqrt(5); // Statik olmadığı için direkt sınıf üzerinden kullanamıyoruz.
// Bunu kullanmamız için obje oluşturmamız gerekir.

// Statik metotları kullanmamız için obje oluşturmamıza gerek yoktur.

console.log(Math.sqrt(4));