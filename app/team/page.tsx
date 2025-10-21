export default function TeamPage() {
  const members = [
    {
      name: '김정서',
      github: 'https://github.com/upuptts12-arch',
      image: '/jungseo.png',
    },
    {
      name: '이예빈',
      github: 'https://github.com/yebeen547',
      image: '/yebin.jpg',
    },
    {
      name: '오은채',
      github: 'https://github.com/euon05/',
      image: '/enon.jpg',
    },
    {
      name: '정효민',
      github: 'https://github.com/EHWkddl',
      image: '/hyomin.jpg',
    },
    {
      name: '한지원',
      github: '',
      image: '/jiwon.jpg',
    },
  ]

  return (
    <main
      className="min-h-screen w-full px-6 py-24 text-center flex flex-col items-center"
      style={{
        background: 'linear-gradient(to bottom right, #f8f9fa, #d9e8ff)',
      }}
    >
      <h1 className="text-4xl font-bold mb-2 text-slate-800">Our Team</h1>
      <p className="text-slate-600 mb-12">웹을 위해 태어남</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover mb-6 shadow"
            />
            <h3 className="text-xl font-semibold text-slate-800">
              {member.name}
            </h3>
            {member.github ? (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 text-sm bg-[#bcd7ff] text-[#1e3a8a] rounded-full border border-[#9ec2ff] hover:bg-[#a8c8ff] transition"
              >
                GitHub
              </a>
            ) : (
              <p className="text-slate-400 text-sm mt-4">GitHub 준비중</p>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
