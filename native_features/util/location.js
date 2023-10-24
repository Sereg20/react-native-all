export const getMapPreview = async (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=AIzaSyCJyfMdNG4_jC0u_SgkpDI8Y_LaTf21IVc`;
    return url
};