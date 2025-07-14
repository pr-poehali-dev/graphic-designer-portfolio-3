import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl font-['Montserrat']">LOGO DESIGNER</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-gray-600 transition-colors">Главная</a>
              <a href="#about" className="hover:text-gray-600 transition-colors">О себе</a>
              <a href="#works" className="hover:text-gray-600 transition-colors">Работы</a>
              <a href="#services" className="hover:text-gray-600 transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Menu" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold font-['Montserrat'] mb-6 tracking-tight">
                GRAPHIC<br />
                <span className="text-gray-600">DESIGNER</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Создаю логотипы, которые запоминаются.<br />
                Современный дизайн для вашего бренда.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-6">
                О себе
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Меня зовут Анна, и я занимаюсь созданием логотипов уже более 5 лет. 
                Специализируюсь на минималистичном дизайне, который работает на всех носителях.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Каждый логотип создается с учетом целей бренда, целевой аудитории и 
                современных трендов дизайна. Работаю с компаниями по всему миру.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-4 py-2">Adobe Illustrator</Badge>
                <Badge variant="outline" className="px-4 py-2">Figma</Badge>
                <Badge variant="outline" className="px-4 py-2">Photoshop</Badge>
                <Badge variant="outline" className="px-4 py-2">Branding</Badge>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <Icon name="User" size={64} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Анна Дизайнер</h3>
                <p className="text-gray-600">Графический дизайнер</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-6">
              Мои работы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Портфолио создано из реальных проектов для различных компаний и стартапов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/cd1dde76-109a-49be-bad5-375d554eb2c4.jpg" 
                    alt="Tech Company Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">TechCorp</h3>
                  <p className="text-gray-600 text-sm">Минималистичный логотип для IT компании</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/0b21fbcb-e3c3-4dbd-8f05-ab4a842ed13b.jpg" 
                    alt="Coffee Shop Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Coffee House</h3>
                  <p className="text-gray-600 text-sm">Уютный логотип для кофейни</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/img/ec24c183-0bba-425f-bebe-8635632b6dca.jpg" 
                    alt="Fitness Brand Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">FitZone</h3>
                  <p className="text-gray-600 text-sm">Динамичный логотип для фитнес-центра</p>
                </div>
              </CardContent>
            </Card>

            {[4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">LOGO</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Логотип #{item}</h3>
                    <p className="text-gray-600 text-sm">Описание проекта и целей</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-6">
              Услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для создания вашего бренда
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Palette" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Логотип</h3>
                <p className="text-gray-600 mb-6">Создание уникального логотипа с несколькими вариантами</p>
                <div className="text-3xl font-bold mb-2">₽15,000</div>
                <p className="text-sm text-gray-500">от 3 дней</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow bg-black text-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" size={24} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Фирменный стиль</h3>
                <p className="text-gray-300 mb-6">Логотип + фирменные цвета + типографика + элементы</p>
                <div className="text-3xl font-bold mb-2">₽35,000</div>
                <p className="text-sm text-gray-400">от 7 дней</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Полный бренд</h3>
                <p className="text-gray-600 mb-6">Комплексное решение + визитки + презентация</p>
                <div className="text-3xl font-bold mb-2">₽75,000</div>
                <p className="text-sm text-gray-500">от 14 дней</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-['Montserrat'] mb-6">
            Начнем работу
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Готовы создать логотип, который выделит ваш бренд? Свяжитесь со мной для обсуждения проекта.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={20} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hello@designer.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={20} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-gray-600">@designer</p>
            </div>
          </div>

          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg">
            Написать мне
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="font-bold text-xl font-['Montserrat'] mb-4">LOGO DESIGNER</div>
          <p className="text-gray-400 mb-8">Создаю логотипы, которые запоминаются</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
          <div className="text-sm text-gray-500">
            © 2024 Logo Designer. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;