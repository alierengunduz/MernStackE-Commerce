import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";

const ProductPageLeft = () => {
  const { productDetail, status, error } = useSelector(
    (state: RootState) => state.products
  );

  //Kullanıcının seçtiği ana resmi saklar.
  const [mainImage, setMainImage] = useState<string>("");

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  // diziyi 2 parçaya ayırır. İlk elemanı firstImage değişkenine, diğer elemanları otherImages değişkenine atar.
  const [firstImage, ...otherImages] = productDetail?.image || [];

  // Eğer ana resim ilk başta mevcut değilse, ilk resmi ana resim olarak ayarla
  const initialMainImage =
    firstImage && firstImage.startsWith("http")
      ? firstImage
      : firstImage
      ? `http://localhost:8000/images/${firstImage.replace("uploads/", "")}`
      : ""; // Boş bir string veya bir varsayılan resim URL'si

  const imageUrl = mainImage || initialMainImage; // Ana resim varsa onu kullan, yoksa başlangıç resmini kullan

  // Diğer resimleri sağ tarafa yerleştir
  const allImages = [
    initialMainImage,
    ...otherImages.map((image) =>
      image.startsWith("http")
        ? image
        : `http://localhost:8000/images/${image.replace("uploads/", "")}`
    ),
  ];

  const handleImageClick = (imageUrl: string) => {
    setMainImage(imageUrl); // Ana resmi tıklanan resimle güncelle
  };

  return (
    <div className="w-1/2 flex items-start gap-x-5">
      {/* Sol taraf: Diğer resimler ve ana resim */}
      <div className="w-1/4 flex flex-col gap-y-4">
        {allImages.length > 0 ? (
          allImages.map((url, index) => (
            <div
              key={index}
              className="w-full h-[30%] flex items-center justify-center"
            >
              <img
                src={url}
                alt={`Product Thumbnail ${index + 1}`}
                className="w-32 h-32 object-cover cursor-pointer"
                onClick={() => handleImageClick(url)}
              />
            </div>
          ))
        ) : (
          <div>No Additional Images Available</div>
        )}
      </div>

      {/* Sağ taraf: Ana resim */}
      <div className="w-3/4">
        <img
          src={imageUrl}
          alt="Main Product"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductPageLeft;
