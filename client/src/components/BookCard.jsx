
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {


    return (
        <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={book.image} alt={book.title} />
            </div>
            <div className="text-gray-500/60 text-sm">
    
                <p className="text-gray-700 font-medium text-lg truncate w-full">{book.title}</p>
                
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-indigo-500">
                        <span className="text-gray-500/60 md:text-sm text-xs line-through">${book.price}</span>
                    </p>
                    <div className="text-indigo-500">
                       
                            <Link to={`/books/${book._id}`} className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium" >
                               See more...
                            </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard