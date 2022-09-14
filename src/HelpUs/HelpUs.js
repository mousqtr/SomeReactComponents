import HelpUsView from "./HelpUsView";

export default function HelpUs() {
    
    const handleRedirect = (id) => {
        console.log(id);
    }
    
    return (
        <HelpUsView redirect={handleRedirect} />
    );
}
