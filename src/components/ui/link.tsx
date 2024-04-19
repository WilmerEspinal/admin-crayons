type Props = {
    name: string;
    imgUrl: string;

}
const LinkNav = ({name,imgUrl}:Props) => {
    return (
        <nav className="mb-7">            
            <a className="flex gap-x-3 items-center text-lg h-12 bg-white rounded-s-lg text-governor-bay-700 font-normal" href=""><img className=" w-6" src={imgUrl} alt="" />{name}</a>
        </nav>
    )
}
export default LinkNav