import {FC} from 'react';


export const Logo:FC<{}>  = () => {

return  (
    <div data-testid="main-logo-cp">
        <h1 className="text-4xl text-main-white">
            Suraj <span className="text-4xl text-main-red"> Auwal</span> <span className="text-5xl text-main-red m-0 p-0">.</span>
        </h1>
    </div>
)

}