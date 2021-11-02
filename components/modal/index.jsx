import { Button, Modal as BSModal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Modal({ show, title, children, onOk, onClose }) {
  const { t } = useTranslation('common');

  const headerTitle = title || t('modalTitle');
  return (
    <BSModal show={show} onHide={onClose} id='modal-confirmation'>
      <BSModal.Header closeButton>
        <BSModal.Title>{headerTitle}</BSModal.Title>
      </BSModal.Header>

      <BSModal.Body>{children}</BSModal.Body>
      <BSModal.Footer>
        <Button variant='secondary' onClick={onClose}>
          {t('modalClose')}
        </Button>
        <Button variant='primary' onClick={onOk}>
          {t('modalOk')}
        </Button>
      </BSModal.Footer>
    </BSModal>
  );
}
