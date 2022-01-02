export default {
    required: function (propertyType) {
      return (v) =>
        (v && v.length > 0) ||
        `Campo ${propertyType} es requerido`
    }
}