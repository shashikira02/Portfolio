export type Project = {
    id:number,
    name:string,
    date:string,
    description: string[],
    technologies: string[],
    demoUrl: string,
    githubUrl :string,
    image:string
}

export const projects=[
    {
        id:1,
        name:" Portfolio website",
        date: "Jan 2026",
        description:[
            'Bui;t using Next.js App router',
            'Fully responsive design',
            'Fully responsive design',
            'Fully responsive design',
        ],
        technologies:['Next.js', 'TypeScript', 'Tailwind CSS'],
        demoUrl:'#',
        githubUrl:'#',
        image:''
    },
    {
        id:2,
        name:"2 Portfolio website",
        date: "Jan 2026",
        description:[
            'Bui;t using Next.js App router',
            'Fully responsive design',
            'Fully responsive design',
            'Fully responsive design',
        ],
        technologies:['Next.js', 'TypeScript', 'Tailwind CSS'],
        demoUrl:'#',
        githubUrl:'#',
        image:''
    },{
        id:3,
        name:"3 Portfolio website",
        date: "Jan 2026",
        description:[
            'Bui;t using Next.js App router',
            'Fully responsive design',
            'Fully responsive design',
            'Fully responsive design',
        ],
        technologies:['Next.js', 'TypeScript', 'Tailwind CSS'],
        demoUrl:'#',
        githubUrl:'#',
        image:''
    }
]