import { MingcuteColorPickerFill } from '../Icons/ColorPicker';

const Apps = () => {
    return{
        colorPicker: {
            icon: <MingcuteColorPickerFill />,
            module: () => import('')
        }
    }
}

export default Apps;