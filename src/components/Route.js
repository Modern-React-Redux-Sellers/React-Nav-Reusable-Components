import useNavigation from "../hooks/use-navigation";

//Takes in path from props, children from props, children being component to be rendered
const Route = ({path,children}) => {
    const {currentPath} = useNavigation();

    //if users current path = path from Route component, show the child component
    if (path === currentPath){
        return children;
    }

    return null;
}

export default Route;