
export default function Navbar () {

    const navbar = [
        {id: 1, title: 'Home'},
        {id: 2, title: 'About'},
        {id: 3, title: 'Services'},
        {id: 4, title: 'Contact'}
    ]

    return(

        <div>

            <nav className="flex justify-evenly items-center bg-slate-900 h-24">

                <h1 className="text-4xl text-slate-200 font-anta font-bold">Red Car'</h1>

                <ul className="hidden md:flex ">
                    {navbar.map( (item => (
                        <li className="text-3xl text-slate-100 hover:text-red-600 font-anta md:mr-10" key={item.id}> <a href={item.title}> {item.title} </a> </li>
                    )) )}
                </ul>

            </nav>

        </div>

    )
}