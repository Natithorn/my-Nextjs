import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Student Page</h1>
      <p>This is the Student Page</p>

      <div className={styles.profile}>
        <Image
          src="https://img2.pic.in.th/pic/DSC_0135.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          priority
          quality={80}
          layout="responsive"
          className={styles.profileImage}
        />

        <div className={styles.info}>
          <p><strong>ชื่อ-นามสกุล:</strong> เนติธร ศรีมี</p>
          <p><strong>รหัสนักศึกษา:</strong> 653450292-4</p>
          <p><strong>อีเมล:</strong> natithorn.s@kkumail.com</p>
          <p><strong>สาขาวิชา:</strong> Computer Science</p>
        </div>
      </div>

      <div className={styles.projects}>
        <h2>Projects Front-end</h2>
        <table className={styles.projectsTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>GitHub Link</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Calculator</td>
              <td>Calculator</td>
              <td><a href="https://github.com/Natithorn?tab=overview&from=2024-08-01&to=2024-08-26" className={styles.projectLink}>GitHub</a></td>
              <td><a href="https://natithorn.github.io/Calculate/index.html" className={styles.projectLink}>View Project</a></td>
            </tr>
            <tr>
              <td>My ToDo list</td>
              <td>JS todo application</td>
              <td><a href="https://github.com/Natithorn/natithorn.github.io/tree/main/ToDoApp" className={styles.projectLink}>GitHub</a></td>
              <td><a href="https://natithorn.github.io/ToDoApp/index.html" className={styles.projectLink}>View Project</a></td>
            </tr>
            <tr>
              <td>Pokedex</td>
              <td>Pokémon Database.</td>
              <td><a href="https://github.com/Natithorn/natithorn.github.io/tree/main/Pokedex" className={styles.projectLink}>GitHub</a></td>
              <td><a href="https://natithorn.github.io/Pokedex/index.html" className={styles.projectLink}>View Project</a></td>
            </tr>
            <tr>
              <td>Weather</td>
              <td>home.openweathermap.</td>
              <td><a href="https://github.com/Natithorn/natithorn.github.io/tree/main/Weather" className={styles.projectLink}>GitHub</a></td>
              <td><a href="https://natithorn.github.io/Weather/index.html" className={styles.projectLink}>View Project</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.projects}>
        <h2>Projects OOP</h2>
        <table className={styles.projectsTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>GitHub Link</th>
      
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lab1</td>
              <td>Calculator</td>
              <td><a href="https://github.com/Natithorn/Lab1" className={styles.projectLink}>GitHub</a></td>
              
            </tr>
            <tr>
              <td>Pokemon</td>
              <td>Pokemon game basic.</td>
              <td><a href="https://github.com/Natithorn/Pokemon" className={styles.projectLink}>GitHub</a></td>
              
            </tr>
            <tr>
              <td>Lab-Class-library</td>
              <td>Class-library OOP.</td>
              <td><a href="https://github.com/Natithorn/Lab-Class-library" className={styles.projectLink}>GitHub</a></td>
              
            </tr>
            <tr>
              <td>CIS-Esport</td>
              <td>CIS-Esport register add OOP.</td>
              <td><a href="https://github.com/Natithorn/CIS-Esport" className={styles.projectLink}>GitHub</a></td>
              
            </tr>
            <tr>
              <td>Project</td>
              <td>simple logistics OOP.</td>
              <td><a href="https://github.com/Natithorn/Project" className={styles.projectLink}>GitHub</a></td>
              
            </tr>
          </tbody>
        </table>
      </div>


      <div className={styles.projects}>
        <h2>Projects Next.js</h2>
        <table className={styles.projectsTable}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
              <th>GitHub Link</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>My first next.js</td>
              <td>home page, student page and pokedex</td>
              <td><a href="https://github.com/Natithorn/my-Nextjs" className={styles.projectLink}>GitHub</a></td>
              <td><a href="https://my-first1-nextjs.vercel.app/" className={styles.projectLink}>View Project</a></td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
}
