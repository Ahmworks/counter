const Event =()=>{

    //?local değişken
    let message = "Güle Güle"
  //?Event handler fonk tanımlaması
const handleTıkla =(event)=>{
    alert("tıklandı");
    //*event objesi üzerinden elementin özelliklerine ulaşabiliriz
    console.log(event)
    console.log("name", event.target.name);
  }; 

function handleÇıkış(msg){
    console.log(msg)
}

const handleDeğiştir = () =>{
    message = "Merhaba React"
    console.log(message)
    // document.querySelector("p").textContent = message
};

    return(
        <div>
            <h2>Events</h2>
            <button 
            onClick={handleTıkla} 
            id="myButton" 
            name="tıkla" 
            className="btn btn-primary">
                Tıkla
                </button>
                <button onClick={()=>alert("Silindi")} className="btn btn-danger">Sil</button>
                <button onClick={handleÇıkış("msg")}  className="btn btn-success">
                    Çıkış
                </button>
                <button onClick={handleDeğiştir} className="btn btn-warning">Değiştir</button>
                <p>{message}</p>
        </div>
    );
};
export default Event; 