import React, { useState } from 'react'
import Student from './component/Student'


const App = () => {

  const [studentData] = useState({

    students:

      [

        {

          name: 'Michael Jordan',

          bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',

          scores: [

            {

              date: '2012-02-18',

              score: 55

            },

            {

              date: '2018-04-22',

              score: 92

            },

            {

              date: '2018-09-15',

              score: 68

            }

          ]

        },

        {
name: 'Larry Bid',

          bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',

          scores: [

            {

              date: '2016-04-05',

              score: 13

            },

            {

              date: '2011-01-06',

              score: 71

            },

            {

              date: '2019-02-23',

              score: 91

            },

            {

              date: '2019-03-01',

              score: 95

            }

          ]

        },

        {

          name: 'Mo Bamba',

          bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',

          scores: [

            {

              date: '2009-06-11',

              score: 99

            },

            {

              date: '2028-08-29',

              score: 74

            },

            {

              date: '2005-03-13',

              score: 83

            }

          ]

        }

      ]
  })

  const studentsList = studentData.students.map((student) => <Student scholars={student} />)
  return (
    <div>
      {studentsList}

    </div>
  )
}
export default App