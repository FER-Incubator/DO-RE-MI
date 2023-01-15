import { useState} from "react";
import Card from './Card';




function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/celo.png', stat: "" },
        { id: 1, img: '/img/celo.png', stat: "" },
        { id: 2, img: '/img/fagot.png', stat: "" },
        { id: 2, img: '/img/fagot.png', stat: "" },
        { id: 3, img: '/img/flauta.png', stat: "" },
        { id: 3, img: '/img/flauta.png', stat: "" },
        { id: 4, img: '/img/harfa.png', stat: "" },
        { id: 4, img: '/img/harfa.png', stat: "" },
        { id: 5, img: '/img/klarinet.png', stat: "" },
        { id: 5, img: '/img/klarinet.png', stat: "" },
        { id: 6, img: '/img/kontrabas.png', stat: "" },
        { id: 6, img: '/img/kontrabas.png', stat: "" },
        { id: 7, img: '/img/oboa.png', stat: "" },
        { id: 7, img: '/img/oboa.png', stat: "" },
        { id: 8, img: '/img/viola.png', stat: "" },
        { id: 8, img: '/img/viola.png', stat: "" }
    ].sort(() => Math.random() - 0.5))


    const [prev, setPrev] = useState(-1);

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
        }else{
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
            }, 1000)
        }
    }


    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        }else{
            check(id);
        }
    }



    return (
        <div className="igra_mem_div">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}></Card>
            ))}
        </div>
    )
}

export default Cards;