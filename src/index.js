const fancy = {
  doMagic() {
    addBodyClass();
  }
}

const addBodyClass = () => {
  document.addEventListener("DOMContentLoaded", function(event){
    document.body.className += " fancy-background";
  });
}

export default fancy;
