export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] =[
    {
        id:1,
        title: 'Dummy text',
        issuer: 'lorem',
        date: '2024',
        credentialUrl:'#'

    }
]