export const fileUpload = async (file) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/bhp-global/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);
  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })
    //console.log(resp)
    if( resp.ok ) {
      const cloudResp = await resp.json();
      //console.log("resp(json)")
      //console.log(cloudResp)
      return cloudResp.secure_url;
    } else {
      //throw await resp.json();
      return null;
    }
  } catch (error) {
    console.log("Error en fileUpload: ",error)
  }
}