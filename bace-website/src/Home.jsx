import './Home.css';
import CourseGrid from './components/CourseGrid';
import CollegePrograms from './components/CollegePrograms';
import BhaktiRoadmap from './components/BhaktiRoadmap';
import BhaktiShastri from './components/BhaktiShastri';
import Intro from './components/Intro';
import Youtube from './components/Youtube';
import BhaktiSteps from './components/BhaktiSteps';
import Testimonials from './components/Testimonials';

function Home() {
    return (
        <>
            <Intro />
            <BhaktiRoadmap />
            <CollegePrograms />
            <CourseGrid />
            <BhaktiShastri />
            <Youtube />
            <BhaktiSteps />
            <Testimonials />
        </>
    );
}

export default Home;