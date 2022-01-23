import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('click')} > 
        adem
    </ChildAsFC>
}

export default Parent;