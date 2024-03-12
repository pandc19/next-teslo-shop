import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

export default function CheckoutPage() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar órden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Ajustar elementos</span>
                        <Link href="/cart" className="underline mb-5">
                            Editar carrito
                        </Link>


                        {/* Items */}
                        {
                            productsInCart.map(product => (
                                <div key={product.slug} className="flex mb-5">
                                    <Image
                                        src={`/products/${product.images[0]}`}
                                        width={100}
                                        height={100}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                        }}
                                        alt={product.title}
                                        className="mr-5 rounded"
                                        priority={true}
                                    />

                                    <div>
                                        <p>{product.title}</p>
                                        <p>{product.price} x 3</p>
                                        <p className="font-bold">Subtotal: ${product.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Checkout - Resumen de órden */}
                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl mb-2">DIrección de entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Jonathan Pillajo</p>
                            <p>Av. Siempre Viva 123</p>
                            <p>Col centro</p>
                            <p>Springfield</p>
                            <p>CP 123123</p>
                            <p>123.123.123.123</p>
                        </div>

                        {/* Divider */}
                        <div className="w-ful h-0.5 rounded bg-gray-200 mb-10" />

                        <h2 className="text-2xl mb-2">Resumen de órden</h2>

                        <div className="grid grid-cols-2">
                            <span>No. Productos</span>
                            <span className="text-right">3 articulos</span>

                            <span>Subtotal</span>
                            <span className="text-right">$ 100</span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">$ 100</span>

                            <span className="text-2xl mt-5">Total:</span>
                            <span className="text-right text-2xl mt-5">$ 100</span>
                        </div>

                        <div className="mt-5 mb-2 w-full">

                            <p className="mb-5">
                                {/* Disclaimer */}
                                <span className="text-xs">
                                    Al hacer clic en &quot;Colocar órden&quot;, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">políticas de privacidad</a>
                                </span>
                            </p>

                            <Link href="/orders/123" className="flex btn-primary justify-center">
                                Colocar órden
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}