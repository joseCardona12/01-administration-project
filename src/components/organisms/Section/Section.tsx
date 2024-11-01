import { Card } from "@/components/molecules"
import { Button } from "@/components/atoms";
import { IconsPlus } from "@/assets/icons";
import "./sectionStyles.scss";
import { Content, IVacant } from "@/models";
interface ISectionVacantProps{
    titleSection:string,
    textButton?:string,
    data: Content[]
}

export default function Section({titleSection, textButton, data}:ISectionVacantProps):React.ReactNode{
    return(
        <section className="section">
            <div className="section-title">
                <h2>{titleSection}</h2>
                <Button
                className="button-add"
                text={textButton}
                icon={<IconsPlus />}
                />
            </div>
            <div className="section-cards">
                {data.map((item,index)=>(
                    <Card
                    key={index}
                    title={item.title}
                    id={item.id}
                    >
                        <p>{item.description}</p>
                        <p>State: <span className={item.status === "ACTIVE" ? "active" : "inactive"}>{item.status}</span></p>
                        <p>Company: {item.company.name}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}