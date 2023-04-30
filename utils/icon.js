import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserAlt, faCreditCard, faCheck, faInfoCircle, faLock, faMinus, faAngleRight } from '@fortawesome/free-solid-svg-icons';


library.add(faUser, faUserAlt, faCreditCard, faCheck, faInfoCircle, faLock, faMinus, faAngleRight);

export default function Icon({ icon, ...props }) {
  return <FontAwesomeIcon icon={icon} {...props} />;
}
