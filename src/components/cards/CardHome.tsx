type cardHome = {
    img: string,
    title: string,
    description: string
}

export default function CardHome( {img, title, description}:cardHome ) {
    return(

        <div>

            <div className="bg-white bg-opacity-85 h-auto text-center rounded-md mr-[25px]">

                <img src={img} alt="Card Home" className="h-50 w-56 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0" />

                <h2 className="p-2 text-slate-950 text-2xl font-bold ">{title}</h2>

                <p className="p-2 text-slate-950 text-xl">{description}</p>

            </div>

        </div>

    )
}