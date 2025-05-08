import ReduxCounter from "../../components/ReduxCounter";
import ReduxProvider from "../../providers/ReduxProviders";

export default function Coba() {
    return (
        <ReduxProvider>
            <ReduxCounter/>
        </ReduxProvider>
    )
}