import styles from '@/components/style/SparkyAccordion.module.css';
import {Accordion} from "radix-ui";


type Item = {content: React.ReactNode, label: string, value: string};
type Props = {props:  Item[]};

export default function SparkyAccordion({props}: Props) {
    return (
        <Accordion.Root type={"multiple"} className={'w-[60ch]'}>
            {props.map((item:Item) => (
                <Accordion.Item key={item.value}
                                className={'mb-4'}
                                value={item.value}>
                    <Accordion.Trigger
                        className={styles.AccordionTrigger + ' pl-6 pr-4 py-4 w-full text-left text-black w-fit bg-[#FFECF7] hover:bg-[#FFE0F2] transition font-medium hover:cursor-pointer'}>
                       <div className={'flex flex-row w-full justify-between items-center'}>
                           {item.label}
                           <span className={styles.AccordionTriggerIcon}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z"
                                    fill="#D972AA"/>
                            </svg>
                        </span>
                       </div>
                    </Accordion.Trigger>
                    <Accordion.Content forceMount className={styles.AccordionContent + ' pl-6 pr-4 py-4 bg-[#FFECF7]'}>
                        {item.content}
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    )
}