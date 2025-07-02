import Button from "@/components/ui/Button/Button";
import { MoreButton } from "@/components/ui";

export default function HomePage() {
    // TODO: set stroke-dasharray='5,10' or stroke-dasharray='6,10' depending on screen size

    return (
        <section className="bg-[url('/background.png')] bg-[length:100%_100%] bg-center bg-no-repeat">
            <div className="flex flex-col px-24 py-81">
                <div className="text-center font-semibold text-6xl 3xl:text-7xl">
                    Чемпионаты и турниры - время

                    <span
                        className="ml-1 px-3 py-1 rounded-2xl text-[#0E8AC8] bg-[#109DE5]/10"
                        style={{
                            border: "none",
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%230E8AC8' stroke-width='4' stroke-dasharray='5,10' stroke-dashoffset='0' stroke-linecap='square' rx='16' ry='16'/%3E%3C/svg%3E\")",
                            backgroundPosition: "0 0",
                            backgroundSize: "100% 100%"
                        }}
                    >
                      побеждать!
                    </span>
                </div>
                <div className="text-center text-[#344054] text-2xl mt-6 flex flex-col">
                    <span>Тебя ждут захватывающие турниры, где ты можешь проявить свои навыки в программировании.</span>
                    <span>Прими участие в чемпионатах, узнай расписание и зарегистрируйся, чтобы не упустить шанс стать лучшим!</span>
                </div>
                <div className="flex gap-4 justify-center mt-6"><MoreButton link="https://cpfed.kz/"/> <Button link="/login" text="Войти"/></div>
            </div>
        </section>
    );
}