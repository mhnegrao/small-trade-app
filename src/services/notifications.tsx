import Swal, { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
interface Options {
  container?: '...';
  popup?: '...';
  header?: '...';
  title?: string;
  closeButton?: '...';
  icon?: '...';
  image?: '...';
  content?: '...';
  htmlContainer?: '...';
  input?: '...';
  inputLabel?: '...';
  validationMessage?: '...';
  actions?: '...';
  confirmButton?: '...';
  denyButton?: '...';
  cancelButton?: '...';
  loader?: '...';
  footer?: string;
}
const options: Options = {};
export const Notification = (
  title?: string,
  icon?: SweetAlertIcon,
  footer?: string,
  content?: string,
  toast?: boolean,
  showConfirmButton?: boolean,
  confirmButtonText?: string,
  showCancelButton?: boolean,
  cancelButtonText?: string
) => {
  return MySwal.fire({
    title,
    footer,
    icon,

    didOpen: () => {
      MySwal.clickConfirm();
    },

    showConfirmButton,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    toast,
  }).then(() => {
    return MySwal.fire(title,content,icon);
  });
};
