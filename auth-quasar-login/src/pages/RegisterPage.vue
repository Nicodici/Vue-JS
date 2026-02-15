<template>
  <div class="div_container">
    <Vueform class="containerForm" size="md" :display-errors="true">
      <StaticElement name="register_title" content="Create account" tag="h1" />
      <StaticElement name="divider" tag="hr" />
      <GroupElement name="container" description="Make sure it matches your legal name">
        <TextElement
          name="first_name"
          placeholder="First name"
          :columns="{
            container: 6,
            label: 12,
            wrapper: 12,
          }"
          field-name="First name"
          :rules="['required', 'max:255']"
        />
        <TextElement
          name="last_name"
          placeholder="Last name"
          :columns="{
            container: 6,
            label: 12,
            wrapper: 12,
          }"
          field-name="Last name"
          :rules="['required', 'max:255']"
        />
      </GroupElement>
      <DateElement
        name="birthday"
        placeholder="Birthday"
        field-name="Birthday"
        :rules="['required']"
        description="Your birthday is not visible others."
        display-format="MMMM Do, YYYY"
      />
      <PhoneElement
        name="phone"
        placeholder="Phone"
        :rules="['required']"
        field-name="Phone"
        :allow-incomplete="true"
        :unmask="true"
      />
      <TextElement
        name="email"
        input-type="email"
        :rules="['required', 'max:255', 'email']"
        placeholder="Email"
        field-name="Email"
        description="You will receive a confirmation letter to this email."
      />
      <TextElement
        name="password"
        input-type="password"
        :rules="['required', 'min:8', 'same:password_confirmation']"
        field-name="Password"
        placeholder="Password"
      />
      <TextElement
        name="password_confirmation"
        input-type="password"
        :rules="['required']"
        field-name="Password confirmation"
        placeholder="Password again"
      />
      <CheckboxElement name="terms" text="I accept the Terms & Conditions & Privacy Policy" />
      <CheckboxElement name="marketing_emails" text="I want to recieve marketing emails" />
      <StaticElement name="divider_1" tag="hr" />
      <ButtonElement
        name="register"
        :submits="true"
        button-label="Create account"
        :full="true"
        size="lg"
      />
    </Vueform>
  </div>
</template>

<script setup></script>
<style scoped>
.div_container {
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.containerForm {
  background-color: #f7f7f7;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 30px;
}
</style>
