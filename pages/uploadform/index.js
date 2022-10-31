import { useState } from "react";
import { useForm } from "react-hook-form";

export default function UploadFormPage(props) {
  const [ImageName, SetImageName] = useState(null);
  const [image, setImage] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (data.myImage[0]) {
      const i = data.myImage[0];
      // console.log(data.myImage[0])
      setImage(i)
      SetImageName(i.name);

      const body = new FormData();
      // console.log("file", image)
      body.append("file", image);
      const response = await fetch("/api/upload", {
        method: "POST",
        body
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          alert("")
        }
      })

    }
  };



  


  return (
    <div>
      <div>

        <h4>Select File</h4>
        <input type="file" name="myImage" {...register("myImage")} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}