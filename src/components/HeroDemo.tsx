import { useState } from "react";
import { Button, Card } from "@heroui/react";
import { Heart, Plus, RotateCcw, Sparkles } from "lucide-react";

export default function HeroDemo() {
	const [count, setCount] = useState(0);
	const [liked, setLiked] = useState(false);

	return (
		<Card className="w-full max-w-md">
			<Sparkles aria-hidden="true" className="size-6 text-primary" />
			<Card.Header>
				<Card.Title>HeroUI работает!</Card.Title>
				<Card.Description>
					Интерактивный React-компонент: HeroUI v3 + Tailwind CSS v4 + иконки Lucide.
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<p className="text-center text-5xl font-semibold tabular-nums">{count}</p>
			</Card.Content>
			<Card.Footer className="flex-wrap justify-center gap-3">
				<Button onPress={() => setCount((c) => c + 1)}>
					<Plus />
					Увеличить
				</Button>
				<Button variant="outline" isDisabled={count === 0} onPress={() => setCount(0)}>
					<RotateCcw />
					Сбросить
				</Button>
				<Button
					variant={liked ? "danger" : "secondary"}
					aria-pressed={liked}
					onPress={() => setLiked((v) => !v)}
				>
					<Heart fill={liked ? "currentColor" : "none"} />
					{liked ? "Нравится" : "Мне нравится"}
				</Button>
			</Card.Footer>
		</Card>
	);
}
