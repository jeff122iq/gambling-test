export type Promotion = {
  id: number;
  title: string;
  description: string;
  status: 'Promotion' | 'Announcement' | 'Exclusive Promotion';
  img: string;
};

export const PROMOTIONS_DATA_ARRAY: Promotion[] = [
  {
    id: 1,
    title: 'Reel Rumble',
    description: 'Win a share in $40,000 every week',
    status: 'Promotion',
    img: 'https://cdn.sanity.io/images/tdrhge4k/stake-com-production/a65d51cd7a4b89974acd4f8aaed4d1b94cc8c9a4-1080x1080.png?w=440&h=440&fit=min&auto=format',
  },
  {
    id: 2,
    title: 'The Level Up',
    description: 'Win a share in $40,000 every week',
    status: 'Promotion',
    img: 'https://cdn.sanity.io/images/tdrhge4k/stake-com-production/e84997728b263b477529f8083c643c9011934d52-1080x1080.png?w=440&h=440&fit=min&auto=format',
  },
  {
    id: 3,
    title: 'Originals Ascent',
    description: 'Win a share in $40,000 every week',
    status: 'Promotion',
    img: 'https://cdn.sanity.io/images/tdrhge4k/stake-com-production/720423db883114d8d8f3813f15208221805306da-1080x1080.png?w=440&h=440&fit=min&auto=format',
  },
  {
    id: 4,
    title: 'Reel Rumble',
    description: 'Win a share in $40,000 every week',
    status: 'Promotion',
    img: 'https://cdn.sanity.io/images/tdrhge4k/stake-com-production/a65d51cd7a4b89974acd4f8aaed4d1b94cc8c9a4-1080x1080.png?w=440&h=440&fit=min&auto=format',
  },
  {
    id: 5,
    title: 'The Level Up',
    description: 'Win a share in $40,000 every week',
    status: 'Promotion',
    img: 'https://cdn.sanity.io/images/tdrhge4k/stake-com-production/e84997728b263b477529f8083c643c9011934d52-1080x1080.png?w=440&h=440&fit=min&auto=format',
  },
  {
    id: 6,
    title: 'Originals Ascent',
    description: 'Win a share in $40,000 every week',
    status: 'Promotion',
    img: 'https://cdn.sanity.io/images/tdrhge4k/stake-com-production/720423db883114d8d8f3813f15208221805306da-1080x1080.png?w=440&h=440&fit=min&auto=format',
  },
];
