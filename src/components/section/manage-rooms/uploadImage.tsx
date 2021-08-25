import { useRef, useState } from 'react';

interface Props {
  image: any;
  setImage: (image: any) => void;
}

export default function UploadImage(props: Props): JSX.Element {
  const [preview, setPreview] = useState<string | null>(
    props.image ?  props.image.path : '',
  );
  const uploadImage = useRef<HTMLInputElement>(null);

  function uploadAnImage() {
    const uploaded = uploadImage.current;
    if (uploaded?.files) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreview(reader.result as string);
          props.setImage(reader.result as string);
        }
      };
      if (uploaded.files[0]) {
        reader.readAsDataURL(uploaded.files[0]);
      }
    }
  }

  return (
    <div className="w-full h-full">
      <input type="file" accept=".png,.jpg" ref={uploadImage} hidden />
      <div
        className={[
          'border border-gray-200 rounded-6 select-none cursor-pointer',
          'p-4 w-full h-full flex flex-col justify-center items-center',
          'border-dashed border-gray-200 text-gray-500',
        ].join(' ')}
        onClick={() => {
          uploadImage.current?.click();
          uploadImage.current?.addEventListener('change', uploadAnImage);
        }}
      >
        {!preview ? (
          <div className="py-8 text-sm">Choose image to Upload</div>
        ) : (
          <img src={preview} alt="upload" />
        )}
      </div>
    </div>
  );
}
