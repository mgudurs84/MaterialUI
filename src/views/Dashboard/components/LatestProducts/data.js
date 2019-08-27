import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'File a Claim',
    imageUrl: '/images/products/claim.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'MBI Lookup Tool',
    imageUrl: '/images/products/MBI.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Retrieve Remittance Advice',
    imageUrl: '/images/products/remit.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Rejected Claims',
    imageUrl: '/images/products/rejected.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Submit Appeal',
    imageUrl: '/images/products/appeals.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];
