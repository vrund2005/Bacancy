import { useState, useEffect } from "react";

export function useGenerate() {

    const [val, setVal] = useState("Hello");
    const [image, setImage] = useState(null);
    const [color, setColor] = useState("black");
    const [bg, setBg] = useState("red");


    useEffect(
        () => {
            fetch(`https://dummyjson.com/image/300x200/${bg}/${color}?fontFamily=pacifico&text=${val}`)
                .then(response => response.blob())
                .then((blob => {
                        const url = URL.createObjectURL(blob);
                        setImage(url);
                        setColor(color)
                    })
                );
        }
        , [val,color,bg]
    )

    return { val, setVal , image , color , setColor , bg , setBg };
}