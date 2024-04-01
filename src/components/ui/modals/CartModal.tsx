import { cartModal } from '@/lib/state/atoms';
import { useAtom } from 'jotai';
import { Modal } from 'react-responsive-modal';


    const customStyles = {
        content: {
        right: '0',
        bottom: 'auto',
        border: 'none',
        borderRadius: '8px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '720px',
        zIndex: 11000
        }
    };

export default function CartModal() {
    const [ open, setOpen] = useAtom(cartModal);

    return(
        <Modal  
            open={open}         
            center
            onClose={() => setOpen(false)}>

            <button
            onClick={() => {setOpen(false)}}
            //className='absolute top-0 right-0'
            >
                X
            </button>
                    <div>I am a modal</div>

        </Modal>
    )
}