import Title from "../assets/logo.png";
const background = () => {
    return (
        <div className="h-screen bg-[084490] w-screen fixed -z-10">
            <div className="relative">
                <img className="absolute top-[8%] left-[6%] w-[24%]" src={Title}></img>
                <div className="h-screen w-screen  bg-login-image opacity-10"></div>"
            </div>
        </div>
    );
};
export default background;