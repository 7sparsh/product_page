import React from 'react';
import './App.css';
import Colors from './components/Colors';
import ThumbDetails from './components/ThumbDetails';

class App extends React.Component{

  state = {
    shoes:[
      {
        "_id": "1",
        "title": "Nike - Air Jordans",
        "src": [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ad635b0-d255-42eb-a182-c666df156019/jordan-zoom-separate-basketball-shoes-CZWFxn.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da4e8baf-ffe9-456c-96e8-764d2fcc41de/jordan-zoom-separate-basketball-shoes-CZWFxn.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2802a89-8055-4854-bc47-a7830d387823/jordan-zoom-separate-basketball-shoes-CZWFxn.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/872e4d9a-c122-4dc3-8a61-1afa95d58197/jordan-zoom-separate-basketball-shoes-CZWFxn.png"
          ],
        "description": "Jordan Zoom Separate",
        "content": "The step-back shot is the muse for the Jordan Zoom Separate, a lightweight low-top shoe designed to help you take control on the court. The cushioning is firmer along the outside of the foot and softer along the inside, so you can lean in hard while banking and changing directions. A Zoom Air unit helps you break away from the defender and get a clear look at the basket.",
        "price": "0.064006239 ETH",
        "colors":["blue","black","crimson","teal"],
        "count": 1
        }
    ],
    index:0
  }

  myRef = React.createRef();

  handleChange = index => {
    this.setState({index:index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  }

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {shoes, index} = this.state;
    // console.log(shoes);
    return (
      <div className="app">
        {
          shoes.map((shoe)=>(
              <div className='details' key={shoe._id}>
                
                <div className="big-img">
                  <img src={shoe.src[index]} className="image" alt="Shoe-1"/>
                </div>

                <div className="box">

                  <div className="row">
                    <h2>{shoe.title}</h2>
                    <span>{shoe.price}</span>
                  </div>

                  <Colors colors={shoe.colors} />

                  {/* <div className="colors">
                    {
                      shoe.colors.map((color, index)=>(
                        <button style={{background:color}} className="button" key={index}></button>
                      ))
                    }
                  </div> */}

                  <p>{shoe.description}</p>
                  <p>{shoe.content}</p>

                  {/* <div className="thumb" ref={this.myRef}>
                    {
                      shoe.src.map((img, index)=>(
                        <img src = {img} key={index} className="image" alt=""
                          onClick={()=>this.handleChange(index)}
                        />
                      ))
                    }
                  </div> */}

                  <ThumbDetails images={shoe.src} tab={this.handleChange} myRef={this.myRef} />

                  <button className = "buy">Buy Now</button>

                </div>
              </div>
            ))
        }
      </div>
    )
  }
}

export default App;
