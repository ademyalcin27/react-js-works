import { Cell } from '@/state';
import CodeCell from '@/components/codeCell';
import TextEditor from '@/components/textEditor';
import ActionBar from '@/components/actionBar';

interface CellListItemProps { 
    cell: Cell
}

const CellListItem: React.FC <CellListItemProps> = ({cell}) => {
    let child: JSX.Element;
    child = cell.type === 'code'? <CodeCell cell={cell}/> : <TextEditor cell={cell}/>
    return <div>
        <ActionBar id={cell.id} />
        {child}
    </div>
}

export default CellListItem