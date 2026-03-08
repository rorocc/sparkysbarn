import Image from "next/image";
import prideItems from "@/app/data/items/pride.json"
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";

type Props = {itemCount?: number, areItemsRandom?: boolean};

export default function ProductCarouselPride(props: Props){
    return(
        <div className={'bg-gray-100 py-8 px-8 rounded-3xl my-12 flex flex-col gap-4'}>
            <span className={'font-bold text-xl'}>Passende Aufkleber für die Pride Season 🏳️‍🌈</span>
            <Carousel className={'w-full mx-auto'} fadeColor={'var(--color-gray-100)'}>
                {
                    prideItems.map((item: any, index: number) => (
                        <div key={item["_container"]}
                             className={'snap-start flex-shrink-0 md:w-50 w-48 py-4'}>
                            <ProductCard title={item["v2-listing-card--title"]}
                                         id={item["_container"]}
                                         url={item["_container_link"]}
                                         img={item["wt-image--cover"]}
                                         category={"Pride"}
                                         price={item['currency-value']}
                                         key={index}/>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}