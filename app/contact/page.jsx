// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

// import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

// const info =[
//     {
//         icon: <FaPhoneAlt/>,
//         title: 'Telefon',
//         description: "(+36) 30 419 9942",
//     },
//     {
//         icon: <FaEnvelope/>,
//         title: 'Email',
//         description: "gaalmark.markit@gmail.com",
//     },
//     {
//         icon: <FaMapMarkerAlt/>,
//         title: 'Cím',
//         description: "Arany J. u. 5. Töltéstava, 9086",
//     },
// ]


// import { motion } from "framer-motion"

// const Contact = () => {
//     return <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="py-6">
//         <div className="container mx-auto">
//             <div className="flex flex-col xl:flex-row gap-[30px]">
//                 {/* form */}
//                 <div className="xl:w-[54%] order-2 xl:order-none">
//                     <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//                         <h3 className="text-4xl text-accent">Keress meg!</h3>
//                         <p className="text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, quia.</p>
//                         {/* input */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <Input type="firstname" placeholder="Keresztnév" />
//                             <Input type="lastname" placeholder="Vezetéknév" />
//                             <Input type="email" placeholder="E-mail cím" />
//                             <Input type="phone" placeholder="Telefonszám" />
//                         </div>
//                         {/* select */}
//                         <Select>
//                             <SelectTrigger className="w-full">
//                                 <SelectValue placeholder="Válassz egy szolgáltatást!"/>
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectGroup>
//                                     <SelectLabel>Válasszon egy szolgáltatást!</SelectLabel>
//                                     <SelectItem value="est">Lorem, ipsum 1.</SelectItem>
//                                     <SelectItem value="cst">Lorem, ipsum. 2</SelectItem>
//                                     <SelectItem value="mst">Lorem, ipsum. 3</SelectItem>
//                                 </SelectGroup>
//                             </SelectContent>
//                         </Select>
//                         {/* textarea */}
//                         <Textarea className="h-[200px]" placeholder="Ide írja az üzenetet.."/>
//                         {/* btn */}
//                         <Button size="md" className="max-w-40">Küldés!</Button>
//                     </form>
//                 </div>
//                 {/* info */}
//                 <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//                     <ul className="flex flex-col gap-10">
//                         {info.map((item, index)=>{
//                             return<li key={index} className="flex items-center gap-6">
//                                 <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                                     <div className="text-[28px]">{item.icon}</div>
//                                 </div>
//                                 <div className="flex-1">
//                                     <p className="text-white/60">{item.title}</p>
//                                     <h3 className="text-xl">{item.description}</h3>
//                                 </div>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </motion.section>
// }

// export default Contact


"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion"
import axios from 'axios';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Telefon',
        description: "(+36) 30 419 9942",
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: "gaalmark.markit@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Cím',
        description: "Arany J. u. 5. Töltéstava, 9086",
    },
]

const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message'),
        };
    
        try {
            const response = await axios.post('http://localhost:5000/send-email', data);
            alert(response.data); // Handle success
        } catch (error) {
            console.error("Error details:", error);
            alert('Error sending email: ' + error.message); // Show user-friendly error message
        }
    };
    
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Keress meg!</h3>
                            <p className="text-white/60">A szövegdoboz kitöltésével tud elérni.</p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Keresztnév" required />
                                <Input type="text" name="lastname" placeholder="Vezetéknév" required />
                                <Input type="email" name="email" placeholder="E-mail cím" required />
                                <Input type="tel" name="phone" placeholder="Telefonszám" required />
                            </div>
                            {/* select */}
                            <Select name="service" required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Válassz egy szolgáltatást!" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Válasszon egy szolgáltatást!</SelectLabel>
                                        <SelectItem value="est">Webfejlesztés</SelectItem>
                                        <SelectItem value="cst">Matematika korrepetáció</SelectItem>
                                        <SelectItem value="mst">CAD-CAM</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea className="h-[200px]" name="message" placeholder="Ide írja az üzenetet.." required />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40">Küldés!</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;

