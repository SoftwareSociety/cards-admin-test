import Card from '../components/card';
import Modal from '../components/modal';
import Layout from '../components/layout/Layout';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Breadcrumbs from '../components/breadcrumbs';

// import Breadcrumbs from 'nextjs-breadcrumbs';

export async function getStaticProps({ locale }) {
  const res = await fetch('https://cards-admin-business-api-test.azurewebsites.net/api/v1.0/FinancialProducts');
  const data = await res.json();

  console.log('111111111111111111111111111111111111111111');
  console.log(data);
  console.log('====================================');

  return {
    props: {
      products: data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function CreateCard({ products }) {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  console.log('====================================');
  console.log(products);
  console.log('====================================');

  const handleModalClose = () => {
    setShow(false);
  };
  const handleModalOk = () => {
    setShow(false);
    setIsLoading(true);
    alert('Call API with data!');
    setIsLoading(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!isInputValid(inputValue)) {
      return;
    }

    setShow(true);
  };

  const handleOnInputChange = (event) => {
    const value = event.target.value;

    setInputValue(value);
    setInputError(!isInputValid(value));
  };

  const isInputValid = (value) => {
    if (parseInt(value) < 1 || value === '') {
      return false;
    }

    return true;
  };

  return (
    <>
      <Layout>
        <Breadcrumbs />
        <Dropdown>
          <Dropdown.Toggle variant='secondary mb-5' id='dropdown-basic'>
            {t('createCardDropdownTitle')}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Card title={t('createCardTitle')}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>{t('createCardFormLabel')}</Form.Label>
              <Form.Control
                type='number'
                min='1'
                max='100'
                value={inputValue}
                onChange={handleOnInputChange}
                isInvalid={inputError}
              />
            </Form.Group>

            <Button variant='primary' type='submit' onClick={handleOnSubmit} disabled={isLoading}>
              {t('createCardFormSubmit')}
            </Button>
          </Form>
        </Card>
      </Layout>

      <Modal show={show} onClose={handleModalClose} onOk={handleModalOk}>
        {t('createCardAlertMessage', { cardsCounter: inputValue })}
      </Modal>
    </>
  );
}
